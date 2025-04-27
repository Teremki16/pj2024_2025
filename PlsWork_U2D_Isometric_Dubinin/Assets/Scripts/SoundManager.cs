using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    [SerializeField] AudioClip DamageSound;
    [SerializeField] AudioClip JewelSound;
    [SerializeField] AudioClip LevelCompleteSound;
    [SerializeField] AudioClip GunSound;

    IEnumerator SoundPlay(AudioClip sound, float time)
    {
        AudioSource au = gameObject.AddComponent<AudioSource>();
        au.clip = sound;
        au.pitch = Random.Range(0.9f, 1.1f);
        au.Play();
        yield return new WaitForSeconds(time);
        Destroy(au);
    }

    public void DamageS()
    {
        StartCoroutine(SoundPlay(DamageSound, DamageSound.length));
    }
    public void JewelS()
    {
        StartCoroutine(SoundPlay(JewelSound, JewelSound.length));
    }
    public void LevelCompleteS()
    {
        StartCoroutine(SoundPlay(LevelCompleteSound, LevelCompleteSound.length));
    }
    public void GunS()
    {
        StartCoroutine(SoundPlay(GunSound, GunSound.length));
    }
}
