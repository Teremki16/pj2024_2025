using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    [SerializeField] AudioClip DamageSound;
    [SerializeField] AudioClip JewelSound;
    [SerializeField] AudioClip LevelComplited;
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
        StartCoroutine(SoundPlay(DamageSound,DamageSound.length));
    }
    public void JevelS()
    {
        StartCoroutine(SoundPlay(JewelSound, DamageSound.length));
    }
    public void LevelCompliteS()
    {
        StartCoroutine(SoundPlay(LevelComplited, DamageSound.length));
    }
    public void GunS()
    {
        StartCoroutine(SoundPlay(GunSound, DamageSound.length));
    }
}
