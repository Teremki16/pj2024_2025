using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    [SerializeField] AudioClip damagesound;
    [SerializeField] AudioClip jewesound;
    [SerializeField] AudioClip levesound;
    [SerializeField] AudioClip gunsound;
    // Start is called before the first frame update
    IEnumerator soundpaly(AudioClip sound,float Time)
    {
        AudioSource au = gameObject.AddComponent<AudioSource>();
        au.clip = sound;
        au.pitch = Random.Range(0.9f, 1.1f);
        au.Play();
        Destroy(au);
        yield return new WaitForSeconds(Time);
    }

    public void DamageS()
    {
        StartCoroutine(soundpaly(damagesound, damagesound.length));
    }

    public void JewelS()
    {
        StartCoroutine(soundpaly(jewesound, jewesound.length));
    }

    public void LevelS()
    {
        StartCoroutine(soundpaly(levesound, levesound.length));
    }

    public void GunS()
    {
        StartCoroutine(soundpaly(gunsound, gunsound.length));
    }

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
